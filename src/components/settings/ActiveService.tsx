import { useMutation } from "@apollo/client";
import { graphql } from "../../../gql";
import { ExternalServiceCredentialFragmentFragment } from "../../../gql/graphql";
import { ButtonSpinner } from "../common/ButtonSpinner";

type TActiveServiceProps = {
  service: ExternalServiceCredentialFragmentFragment;
  onRefetch: () => void;
};

const DeactivateExternalServiceMutation = graphql(/* GraphQL */ `
  mutation DeactivateExternalServiceMutation(
    $serviceType: ExternalServiceType!
  ) {
    deactivateExternalService(serviceType: $serviceType)
  }
`);

export const ActiveService = ({ service, onRefetch }: TActiveServiceProps) => {
  const [deactivateService, { loading }] = useMutation(
    DeactivateExternalServiceMutation
  );
  const handleDeactivate = () => {
    deactivateService({
      variables: {
        serviceType: service.externalService.type,
      },
    }).then(() => {
      onRefetch();
    });
  };

  return (
    <div className="p-3 border border-grey-medium rounded-md w-3/4 mt-3">
      <div className="flex justify-between align-center">
        <p>{service.externalService.type}</p>
        <button
          className="px-2 py-1 border-2 border-grey-medium rounded-md
          hover:bg-grey-light transform w-32 flex justify-center"
          onClick={handleDeactivate}
        >
          {loading && <ButtonSpinner />}
          Deactivate
        </button>
      </div>
    </div>
  );
};
