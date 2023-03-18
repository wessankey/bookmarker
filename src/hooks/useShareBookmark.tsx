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
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const [showShareFailure, setShowShareFailure] = useState(false);

  const { data } = useQuery(AvailableExternalServicesQuery);

  const availableServices =
    data?.user.externalServices.map((s) => s.externalService.type) || [];

  useEffect(() => {
    if (!!showShareSuccess) {
      setTimeout(() => {
        setShowShareSuccess(false);
      }, 5000);
    }
  }, [showShareSuccess]);

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
    }).then((res) => {
      if (res.data?.shareToExternalService === true) {
        setShowShareSuccess(true);
      } else {
        setShowShareFailure(true);
      }
    });
  };

  const handleCloseToast = () => {
    setShowShareSuccess(false);
    setShowShareFailure(false);
  };

  return {
    showShareOptions,
    showShareSuccess,
    showShareFailure,
    availableServices,
    handleClickShare,
    handleShareToExternalService,
    handleCloseToast,
  };
};
