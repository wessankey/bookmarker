import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import { useState } from "react";

import Link from "next/link";
import { BlockPicker } from "react-color";
import { useOutsideClick } from "../../lib/hooks/useOutsideClick";
import { DeleteTagModal } from "./DeleteTagModal";
import { Tag } from "./Tag";
import { TTag } from "./types";
import { graphql } from "../../../gql";
import { TagQueryDocument } from "../../../gql/graphql";

type TTagDetailRowProps = {
  tag: TTag;
};

type TUpdateTagForm = {
  name: string;
  color: string;
};

const AddTagMutation = graphql(/* GraphQL */ `
  mutation AddTagMutation($upsertTagInput: UpsertTagInput!) {
    upsertTag(upsertTagInput: $upsertTagInput) {
      id
    }
  }
`);

export const TagDetailRow = ({ tag }: TTagDetailRowProps) => {
  const [displaySettings, setDisplaySettings] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setDisplayDeleteModal(false);

  const handleToggleSettings = () => {
    setDisplaySettings((prev) => !prev);
  };

  return (
    <div className="border-b border-grey-medium pb-3 pt-5">
      <div key={tag.id} className="flex justify-between">
        <div>
          <Tag tag={tag} />
        </div>
        <div className="mr-4">
          <button
            className="border border-grey-medium rounded-md px-3 py-1 text-sm
                   text-gray-600 hover:bg-grey-medium mr-3"
          >
            <Link href={{ pathname: "bookmarks", query: { tag: tag.value } }}>
              View Bookmarks
            </Link>
          </button>

          {!displaySettings && (
            <button
              className="border border-grey-medium rounded-md px-3 py-1 text-sm
                   text-gray-600 hover:bg-grey-medium mr-3"
              onClick={handleToggleSettings}
            >
              Edit
            </button>
          )}

          <button
            onClick={() => setDisplayDeleteModal(true)}
            className="border border-grey-medium rounded-md px-3 py-1 text-sm
                   text-gray-600 hover:bg-grey-medium"
          >
            Delete
          </button>
        </div>
      </div>
      <DeleteTagModal
        id={tag.id}
        isOpen={displayDeleteModal}
        onClose={handleCloseDeleteModal}
      />
      {displaySettings && (
        <TagSettings
          id={tag.id}
          name={tag.value}
          color={tag.color}
          onToggleSettings={handleToggleSettings}
        />
      )}
    </div>
  );
};

const TagSettings = ({
  id,
  name,
  color,
  onToggleSettings,
}: {
  id: string;
  name: string;
  color: string;
  onToggleSettings: () => void;
}) => {
  const [updateTag] = useMutation(AddTagMutation, {
    refetchQueries: [TagQueryDocument],
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pickedColor, setPickedColor] = useState(color);

  const ref = useOutsideClick({ callback: () => setShowColorPicker(false) });

  const handleUpdateTag = (values: TUpdateTagForm) => {
    updateTag({
      variables: {
        upsertTagInput: {
          id,
          name: values.name,
          color: values.color,
        },
      },
    }).then((res) => {
      onToggleSettings();
    });
  };

  return (
    <div className="mt-4">
      <Formik initialValues={{ name, color }} onSubmit={handleUpdateTag}>
        {({
          values,
          handleChange,
          isSubmitting,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex items-center">
                <p className="mr-3">Name</p>
                <input
                  type="text"
                  className="rounded-md h-6 border-1 border-grey-medium py-3 text-sm"
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center relative ml-5 ">
                <p className="mr-3">Color</p>
                <div
                  style={{ backgroundColor: pickedColor }}
                  className="w-5 h-5 rounded-sm cursor-pointer border border-grey-200 rounded-md"
                  onClick={() => setShowColorPicker((prev) => !prev)}
                ></div>

                {showColorPicker && (
                  <div ref={ref} className="absolute top-8 right-[-76px]">
                    <BlockPicker
                      colors={[
                        "#0e7517",
                        "#fcba03",
                        "#FF7F50",
                        "#2127d9",
                        "#e80ed2",
                        "#e80514",
                      ]}
                      color={pickedColor}
                      onChange={(value) => {
                        setFieldValue("color", value.hex);
                        setPickedColor(value.hex);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex mt-4">
              <button
                onClick={() => {
                  resetForm();
                  onToggleSettings();
                }}
                className=" border border-grey-medium rounded-md px-3 py-1 text-sm
                   text-gray-600 hover:bg-grey-medium mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-grey-medium rounded-md px-3 py-1 text-sm
                   text-gray-600 hover:bg-grey-medium mr-3"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
