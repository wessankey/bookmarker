import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { graphql } from "../../../gql";
import {
  BookmarkQueryDocument,
  TagFragmentFragment,
} from "../../../gql/graphql";
import { useHasChanged } from "../../lib/hooks/useHasChanged";
import { ButtonSpinner } from "../common/ButtonSpinner";
import CreatableMultiSelect from "../common/CreatableMultiSelect";
import { Modal } from "../common/Modal";

export type TUpsertBookmarkForm = {
  id?: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  collectionId?: string;
};

export type TUpsertMode = "ADD" | "UPDATE";

type TUpsertBookmarkModalProps = {
  isOpen: boolean;
  tags: TagFragmentFragment[];
  initialFormState: TUpsertBookmarkForm;
  mode: TUpsertMode;
  onClose: () => void;
  onSuccess: () => void;
};

const UpsertBookmarkMutation = graphql(/* GraphQL */ `
  mutation UpsertBookmarkMutation(
    $where: BookmarkWhereUniqueInput!
    $create: BookmarkCreateInput!
    $update: BookmarkUpdateInput!
  ) {
    upsertOneBookmark(where: $where, create: $create, update: $update) {
      id
    }
  }
`);

export const UpsertBookmarkModal = ({
  isOpen,
  tags,
  initialFormState,
  mode,
  onClose,
  onSuccess,
}: TUpsertBookmarkModalProps) => {
  const tagOptions = tags.map((t) => ({ label: t.value, value: t.id }));
  const [upsertBookmark, { loading }] = useMutation(UpsertBookmarkMutation, {
    refetchQueries: [BookmarkQueryDocument],
  });

  const session = useSession();

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  const handleUpsertBookmark = (values: TUpsertBookmarkForm) => {
    const removedTags = initialFormState.tags.filter(
      (initialTag) => !values.tags.find((t) => t === initialTag)
    );

    upsertBookmark({
      variables: {
        where: {
          id: values.id ?? "-1",
        },
        create: {
          title: values.title,
          description: values.description,
          url: values.url,
          tags: {
            connect: values.tags.map((t) => ({ id: t })),
          },
          user: {
            connect: {
              id: session.data?.user.id,
            },
          },
          collections: {
            connect: [{ id: values.collectionId }],
          },
        },
        update: {
          title: { set: values.title },
          description: { set: values.description },
          url: { set: values.url },
          tags: {
            connect: values.tags.map((t) => ({ id: t })),
            disconnect: removedTags.map((t) => ({ id: t })),
          },
        },
      },
    }).then(() => {
      onSuccess();
      handleClose();
    });
  };

  const formik = useFormik({
    initialValues: initialFormState,
    onSubmit: handleUpsertBookmark,
    validate: (values) => {
      let errors: { title?: string; url?: string } = {};

      if (!values.title) {
        errors.title = "required";
      }

      if (!values.url) {
        errors.url = "required";
      }

      return errors;
    },
  });

  const formStateHasChanged = useHasChanged(initialFormState);

  useEffect(() => {
    if (formStateHasChanged) {
      formik.setValues(initialFormState);
    }
  }, [initialFormState, formik, formStateHasChanged]);

  return (
    <Modal
      onClose={handleClose}
      open={isOpen}
      title={mode === "ADD" ? "Add Bookmark" : "Update Bookmark"}
      body={
        <>
          <form id="add-modal-form" onSubmit={formik.handleSubmit}>
            <div className="form-control w-full mb-3">
              <label className="label" htmlFor="title">
                <span className="label-text">Title</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                className={`input input-bordered w-full input-md bg-[#f9fafb] ${
                  formik.touched.title && formik.errors.title && "input-error"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-xs mt-2 ml-2 text-red">Title required</p>
              )}
            </div>

            <div className="form-control w-full mb-3">
              <label className="label" htmlFor="description">
                <span className="label-text">Description</span>
              </label>
              <input
                id="description"
                type="text"
                placeholder="Description"
                className="input input-bordered w-full input-md bg-[#f9fafb]"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>

            <div className="form-control w-full mb-3">
              <label className="label" htmlFor="url">
                <span className="label-text">URL</span>
              </label>
              <input
                id="url"
                type="text"
                placeholder="www.example.com"
                className={`input input-bordered w-full input-md bg-[#f9fafb] ${
                  formik.touched.url && formik.errors.url && "input-error"
                }`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.url}
              />
              {formik.touched.url && formik.errors.url && (
                <p className="text-xs mt-2 ml-2 text-red">URL required</p>
              )}
            </div>

            <div className="mb-3">
              <CreatableMultiSelect
                id="tags"
                label="Tags"
                options={tagOptions}
                value={formik.values.tags.map((t) => ({
                  label: tagOptions.find((o) => o.value == t)?.label || "",
                  value: t,
                }))}
                onChange={(tags: string[]) =>
                  formik.setFieldValue("tags", tags)
                }
              />
            </div>
          </form>
        </>
      }
      footer={
        <div className="flex justify-end">
          <button
            className="btn btn-primary btn-sm normal-case"
            type="submit"
            form="add-modal-form"
          >
            {loading && <ButtonSpinner />}
            {mode === "ADD" ? "Create" : "Update"}
          </button>

          <button
            className="btn btn-sm btn-ghost normal-case border border-grey-light h-5 ml-3"
            type="submit"
            form="add-modal-form"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      }
    />
  );
};
