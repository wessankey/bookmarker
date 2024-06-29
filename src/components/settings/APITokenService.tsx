import { useMutation } from "@apollo/client";
import { useState } from "react";
import { graphql } from "../../../gql";
import { ExternalServiceType } from "../../../gql/graphql";

type TUsernamePasswordServiceProps = {
  serviceType: ExternalServiceType;
  onRefetch: () => void;
};

const ActivateAPITokenExternalServiceMutation = graphql(/* GraphQL */ `
  mutation ActivateAPITokenExternalServiceMutation(
    $input: ActivateAPITokenServiceInput!
  ) {
    activateAPITokenExternalService(input: $input)
  }
`);

export const APITokenService = ({
  serviceType,
  onRefetch,
}: TUsernamePasswordServiceProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [apiToken, setApiToken] = useState("");

  const [activateService, { loading }] = useMutation(
    ActivateAPITokenExternalServiceMutation
  );

  const handleClickSave = () => {
    activateService({
      variables: {
        input: {
          externalService: serviceType,
          apiToken: apiToken,
        },
      },
    }).then(() => {
      onRefetch();
      setShowSettings(false);
    });
  };

  const saveDisabled = !apiToken;

  return (
    <div className="p-3 border border-grey-medium rounded-md w-3/4 mt-3">
      <div className="flex justify-between align-center">
        <p>{serviceType}</p>
        <button
          className="px-2 py-1 border-2 border-grey-medium rounded-md
          hover:bg-grey-light transform w-24"
          onClick={() => setShowSettings(true)}
        >
          Activate
        </button>
      </div>

      <div
        className={`
          transition-all
          duration-200
          ease
          ${showSettings ? "mh-10" : "h-0"} 
          ${showSettings ? "block" : "hidden"}`}
      >
        <div>
          <div className="form-control w-full mb-3">
            <label className="label" htmlFor="apiToken">
              <span className="label-text">API Token</span>
            </label>
            <input
              id="apiToken"
              type="text"
              className="input input-bordered w-full input-md bg-[#f9fafb]"
              onChange={(e) => setApiToken(e.target.value)}
            />
          </div>

          <div className="flex mt-5 mb-1">
            <button
              className="px-2 py-1 rounded-md
            hover:bg-grey-light"
              onClick={() => setShowSettings(false)}
            >
              Cancel
            </button>
            <button
              className={`ml-3 px-2 py-1 ${
                saveDisabled
                  ? "bg-primary-light"
                  : "bg-primary hover:cursor-pointer"
              } rounded-md text-white w-20`}
              onClick={handleClickSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
