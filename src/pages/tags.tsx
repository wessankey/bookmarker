import { useQuery } from "@apollo/client";
import { useState } from "react";
import { graphql } from "../../gql";
import { CustomNextPage } from "../../types/CustomNextPage";
import { EmptyState } from "../components/common/EmptyState";
import { Spinner } from "../components/common/Spinner";
import Layout from "../components/layout/Layout";
import { AddTagModal } from "../components/tag/AddTagModal";
import { TagDetailRow } from "../components/tag/TagDetailRow";

const TagQuery = graphql(/* GraphQL */ `
  query TagQuery {
    tags {
      id
      value
      tagColor
    }
  }
`);

const Tags: CustomNextPage = () => {
  const { data, loading } = useQuery(TagQuery, {
    notifyOnNetworkStatusChange: true,
  });
  const [showAddTagModal, setShowAddTagModal] = useState(false);

  const handleCloseAddTagModlal = () => setShowAddTagModal(false);

  const tags = data?.tags;

  return (
    <div>
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl font-bold">Tags</h1>
        {tags && tags.length > 0 && (
          <button
            className="btn btn-primary btn-md normal-case"
            onClick={() => setShowAddTagModal(true)}
          >
            Add Tag
          </button>
        )}
      </div>
      {loading ? (
        <Spinner />
      ) : tags && tags.length > 0 ? (
        <div className="w-2/3">
          {tags?.map((tag) => {
            return <TagDetailRow key={tag.id} tag={tag} />;
          })}
        </div>
      ) : (
        <div className="mt-56">
          <EmptyState
            title="No Tags"
            subtext="Add a tag to start organizing your bookmarks"
          >
            <button
              className="btn btn-primary btn-md normal-case"
              onClick={() => setShowAddTagModal(true)}
            >
              Add Tag
            </button>
          </EmptyState>
        </div>
      )}

      <AddTagModal isOpen={showAddTagModal} onClose={handleCloseAddTagModlal} />
    </div>
  );
};

export default Tags;
Tags.requireAuth = true;
Tags.layout = Layout;
