import { useMutation } from "@apollo/client";
import { useState } from "react";
import { graphql } from "../../../gql";
import { ExternalServiceType } from "../../../gql/graphql";

type TUsernamePasswordServiceProps = {
  serviceType: ExternalServiceType;
  onRefetch: () => void;
};

const ActivateExternalServiceMutation = graphql(/* GraphQL */ `
  mutation ActivateExternalServiceMutation(
    $input: ActivateUsernameAndPasswordServiceInput!
  ) {
    activateUsernameAndPasswordExternalService(input: $input)
  }
`);

export const UsernamePasswordService = ({
  serviceType,
  onRefetch,
}: TUsernamePasswordServiceProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [activateService, { loading }] = useMutation(
    ActivateExternalServiceMutation
  );

  const handleClickSave = () => {
    activateService({
      variables: {
        input: {
          externalService: serviceType,
          username,
          password,
        },
      },
    }).then(() => {
      onRefetch();
      setShowSettings(false);
    });
  };

  const saveDisabled = !username || !password;

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
            <label className="label" htmlFor="username">
              <span className="label-text">Username</span>
            </label>
            <input
              id="username"
              type="text"
              className="input input-bordered w-full input-md bg-[#f9fafb]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-control w-full mb-3">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full input-md bg-[#f9fafb]"
              onChange={(e) => setPassword(e.target.value)}
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
              disabled={saveDisabled}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
