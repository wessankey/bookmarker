import { useMutation } from "@apollo/client";
import { useState } from "react";
import { graphql } from "../../../gql";
import { TagQueryDocument } from "../../../gql/graphql";
import { ButtonSpinner } from "../common/ButtonSpinner";
import { Modal } from "../common/Modal";

type TDeleteTagModalProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const DeleteTagMutation = graphql(/* GraphQL */ `
  mutation DeleteTagMutation($where: TagWhereUniqueInput!) {
    deleteOneTag(where: $where) {
      id
    }
  }
`);

export const DeleteTagModal: React.FC<TDeleteTagModalProps> = ({
  id,
  isOpen,
  onClose,
}: TDeleteTagModalProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const [DeleteTag, { loading }] = useMutation(DeleteTagMutation, {
    refetchQueries: [TagQueryDocument],
  });

  const handleDeleteTag = () => {
    setIsDeleting(true);
    DeleteTag({
      variables: {
        where: {
          id,
        },
      },
    }).then(() => {
      setIsDeleting(false);
      onClose();
    });
  };

  return (
    <Modal
      onClose={onClose}
      open={isOpen}
      title="Are you sure you want to delete this tag?"
      body={
        <div className="text-center">
          <p className="mb-5 text-sm">
            No bookmarks will be removed. The tag will only be removed from your
            bookmarks.
          </p>
        </div>
      }
      footer={
        <div className="flex justify-end gap-4">
          <button
            className="btn btn-primary btn-sm normal-case"
            onClick={handleDeleteTag}
          >
            {isDeleting && <ButtonSpinner />}
            Yes, I&apos;m sure
          </button>
          <button
            className="btn btn-primary btn-sm normal-case"
            type="submit"
            form="add-modal-form"
          >
            No, cancel
          </button>
        </div>
      }
    />
  );
};
