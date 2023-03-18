import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BlockPicker } from "react-color";
import { graphql } from "../../../gql";
import { TagQueryDocument } from "../../../gql/graphql";
import { useOutsideClick } from "../../lib/hooks/useOutsideClick";
import { ButtonSpinner } from "../common/ButtonSpinner";
import { Modal } from "../common/Modal";

type TAddTagForm = {
  name: string;
  color: string;
};

type TAddTagModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTagMutation = graphql(/* GraphQL */ `
  mutation AddTagMutation($data: TagCreateInput!) {
    createOneTag(data: $data) {
      id
    }
  }
`);

export const AddTagModal: React.FC<TAddTagModalProps> = ({
  isOpen,
  onClose,
}: TAddTagModalProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const ref = useOutsideClick({ callback: () => setShowColorPicker(false) });

  const [AddTag, { loading }] = useMutation(AddTagMutation, {
    refetchQueries: [TagQueryDocument],
  });

  const session = useSession();

  const handleAddTag = (values: TAddTagForm) => {
    AddTag({
      variables: {
        data: {
          value: values.name,
          tagColor: values.color,
          user: {
            connect: {
              id: session.data?.user.id,
            },
          },
        },
      },
    }).then(() => {
      onClose();
    });
  };

  const formik = useFormik({
    initialValues: { name: "", color: "0e7517" },
    onSubmit: handleAddTag,
  });

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Create a Tag"
      body={
        <form id="add-modal-form" onSubmit={formik.handleSubmit}>
          <div className="form-control w-full mb-3">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full input-md bg-[#f9fafb]"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div>
            <div className="flex items-center relative">
              <label className="label" htmlFor="color">
                <span className="label-text">Color</span>
              </label>
              <div
                style={{ backgroundColor: formik.values.color }}
                className="w-5 h-5 ml-3 cursor-pointer border border-grey-light rounded-md"
                onClick={() => setShowColorPicker((prev) => !prev)}
              ></div>
            </div>

            {showColorPicker && (
              <div ref={ref} className="absolute top-[240px] left-[6px]">
                <BlockPicker
                  colors={[
                    "#0e7517",
                    "#fcba03",
                    "#FF7F50",
                    "#2127d9",
                    "#e80ed2",
                    "#e80514",
                  ]}
                  color={formik.values.color}
                  onChange={(value) => formik.setFieldValue("color", value.hex)}
                />
              </div>
            )}
          </div>
        </form>
      }
      footer={
        <div>
          <button
            className="btn btn-primary btn-sm normal-case"
            type="submit"
            form="add-modal-form"
          >
            {loading && <ButtonSpinner />}
            Create
          </button>

          <button
            className="btn btn-sm btn-ghost normal-case border border-grey-light h-5"
            type="submit"
            form="add-modal-form"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      }
    />
  );
};
