import { useMutation } from "@apollo/client";
import { Field, FieldProps, Form, Formik } from "formik";
import { graphql } from "../../../gql";
import { CollectionsQueryDocument } from "../../../gql/graphql";

type TCreateCollectionForm = {
  name: string;
  description: string;
  public: boolean;
};

type TCreateCollectionModalProps = {
  onClose: () => void;
};

const CreateCollectionMutation = graphql(/* GraphQL */ `
  mutation CreateCollectionMutation($data: CollectionCreateInput!) {
    createOneCollection(data: $data) {
      id
    }
  }
`);

export const CreateCollectionModal: React.FC<TCreateCollectionModalProps> = ({
  onClose,
}: TCreateCollectionModalProps) => {
  const [upsertCollection, { loading }] = useMutation(
    CreateCollectionMutation,
    {
      refetchQueries: [CollectionsQueryDocument],
    }
  );

  const handleUpsertCollection = (values: TCreateCollectionForm) => {
    upsertCollection({
      variables: {
        data: {
          createdAt: new Date(),
          description: values.description,
          name: values.name,
          public: values.public,
        },
      },
    }).then(onClose);
  };

  return (
    <Formik
      initialValues={{ name: "", description: "", public: false }}
      onSubmit={handleUpsertCollection}
    >
      {(form) => (
        <>
          <Form id="add-modal-form">
            <div className="mb-3">
              <Field name="name">
                {(props: FieldProps<string>) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered w-full w-full input-md bg-[#f9fafb]"
                      {...props.field}
                    />
                  </div>
                )}
              </Field>
            </div>

            <div className="mb-3">
              <Field name="description">
                {(props: FieldProps<string>) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="input input-bordered w-full input-md bg-[#f9fafb]"
                      {...props.field}
                    />
                  </div>
                )}
              </Field>
            </div>

            <div className="mt-5">
              <Field name="public">
                {(props: FieldProps<boolean>) => (
                  <div className="form-control flex-row items-center">
                    <label className="cursor-pointer label">
                      <span className="label-text">Public</span>
                    </label>

                    <input
                      type="checkbox"
                      className="toggle toggle-primary ml-3"
                      checked={props.field.value}
                      onChange={(e) => {
                        form.setFieldValue("public", e.target.checked);
                      }}
                    />
                  </div>
                )}
              </Field>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};
