import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { graphql } from "../../gql";
import { ExternalServiceType } from "../../gql/graphql";

const ShareToExternalServiceMutation = graphql(/* GraphQL */ `
  mutation ShareToExternalServiceMutation($input: ShareInput!) {
    shareToExternalService(input: $input)
  }
`);

const AvailableExternalServicesQuery = graphql(/* GraphQL */ `
  query AvailableExternalServicesQuery {
    user {
      externalServices {
        id
        externalService {
          id
          type
        }
      }
    }
  }
`);

export const useShareBookmark = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { data } = useQuery(AvailableExternalServicesQuery);

  const availableServices =
    data?.user.externalServices.map((s) => s.externalService.type) || [];

  useEffect(() => {
    if (!!showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [showToast]);

  const handleClickShare = () => {
    setShowShareOptions((prev) => !prev);
  };

  const [shareToExternalServiceMutation] = useMutation(
    ShareToExternalServiceMutation
  );

  const handleShareToExternalService = (
    bookmarkId: string,
    externalService: ExternalServiceType
  ) => {
    setShowShareOptions(false);

    shareToExternalServiceMutation({
      variables: {
        input: {
          bookmarkId,
          externalService,
        },
      },
    }).then(() => setShowToast(true));
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return {
    showShareOptions,
    showToast,
    availableServices,
    handleClickShare,
    handleShareToExternalService,
    handleCloseToast,
  };
};
