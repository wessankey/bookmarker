import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { BlockPicker } from "react-color";
import { graphql } from "../../../gql/gql";
import { TagFragmentFragment, TagQueryDocument } from "../../../gql/graphql";
import { useOutsideClick } from "../../lib/hooks/useOutsideClick";
import { DeleteTagModal } from "./DeleteTagModal";
import { Tag } from "./Tag";

type TTagDetailRowProps = {
  tag: TagFragmentFragment;
};

type TUpdateTagForm = {
  id: string;
  value: string;
  color: string;
};

const UpdateTagMutation = graphql(/* GraphQL */ `
  mutation UpdateTagMutation(
    $data: TagUpdateInput!
    $where: TagWhereUniqueInput!
  ) {
    updateOneTag(data: $data, where: $where) {
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
          color={tag.tagColor}
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
  const [updateTag] = useMutation(UpdateTagMutation, {
    refetchQueries: [TagQueryDocument],
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pickedColor, setPickedColor] = useState(color);

  const ref = useOutsideClick({ callback: () => setShowColorPicker(false) });

  const handleUpdateTag = (values: TUpdateTagForm) => {
    updateTag({
      variables: {
        where: {
          id: values.id,
        },
        data: {
          tagColor: {
            set: values.color,
          },
          value: {
            set: values.value,
          },
        },
      },
    }).then(onToggleSettings);
  };

  return (
    <div className="mt-4">
      <Formik
        initialValues={{ id, value: name, color }}
        onSubmit={handleUpdateTag}
      >
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
                  value={values.value}
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center relative ml-5 ">
                <p className="mr-3">Color</p>
                <div
                  style={{ backgroundColor: pickedColor }}
                  className="w-5 h-5 cursor-pointer border border-grey-medium rounded-md"
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
