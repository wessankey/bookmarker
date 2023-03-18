import { useState } from "react";
import { CustomNextPage } from "../../../types/CustomNextPage";
import { CollectionListView } from "../../components/collection/CollectionListView";
import { CreateCollectionModal } from "../../components/collection/CreateCollectionModal";
import { ButtonSpinner } from "../../components/common/ButtonSpinner";
import { Modal } from "../../components/common/Modal";
import { Spinner } from "../../components/common/Spinner";
import Layout from "../../components/layout/Layout";
import { useCollections } from "../../hooks/useCollections";

const Collections: CustomNextPage = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const { loading, collections, onDeleteCollection } = useCollections();

  return (
    <>
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-bold">Collections</h1>

        <button
          className="btn btn-primary btn-md normal-case text-white "
          onClick={openModal}
        >
          Create Collection
        </button>
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <CollectionListView
            collections={collections || []}
            onDeleteCollection={onDeleteCollection}
          />
        )}
      </div>

      <Modal
        title="Create Collection"
        open={isOpen}
        onClose={closeModal}
        body={<CreateCollectionModal onClose={closeModal} />}
        footer={
          <div className="flex justify-end">
            <button
              className="btn btn-primary btn-sm normal-case"
              type="submit"
              form="add-modal-form"
            >
              {loading && <ButtonSpinner />}
              Create
            </button>

            <button
              className="btn btn-sm btn-ghost normal-case border border-grey-light h-5 ml-3"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        }
      />
    </>
  );
};

export default Collections;
Collections.requireAuth = true;
Collections.layout = Layout;
