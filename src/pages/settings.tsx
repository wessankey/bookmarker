import { useQuery } from "@apollo/client";
import { graphql } from "../../gql";
import { CustomNextPage } from "../../types/CustomNextPage";
import Layout from "../components/layout/Layout";
import { ActiveService } from "../components/settings/ActiveService";
import { APITokenService } from "../components/settings/APITokenService";
import { UsernamePasswordService } from "../components/settings/UsernamePasswordService";
import { ExternalServiceAuthType } from "@prisma/client";
import { Spinner } from "../components/common/Spinner";

const SettingsQuery = graphql(/* GraphQL */ `
  query SettingsQuery {
    user {
      id
      name
      email
      externalServices {
        id
        externalService {
          id
          type
          authType
        }
      }
    }
    externalServices {
      id
      type
      authType
    }
  }
`);

const Settings: CustomNextPage = () => {
  const { data, loading, refetch } = useQuery(SettingsQuery);

  const activeServices = data?.user.externalServices || [];

  const inactiveServices =
    data?.externalServices.filter(
      (s) => !activeServices?.find((as) => as.externalService.id === s.id)
    ) || [];

  const handleRefetch = () => refetch();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <h2 className="text-xl font-bold mt-3">Share & Save</h2>
      {activeServices.length > 0 && (
        <div className="mt-5">
          <h2 className="text-lg font-bold ">Active Services</h2>
          {activeServices.map((activeService) => {
            return (
              <ActiveService
                key={activeService.id}
                service={activeService}
                onRefetch={handleRefetch}
              />
            );
          })}
        </div>
      )}

      {inactiveServices.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold mt-3">Available Services</h2>
          {inactiveServices.map((service) => {
            switch (service.authType) {
              case ExternalServiceAuthType.USERNAME_AND_PASSWORD:
                return (
                  <UsernamePasswordService
                    key={service.id}
                    serviceType={service.type}
                    onRefetch={handleRefetch}
                  />
                );
              case ExternalServiceAuthType.API_TOKEN:
                return (
                  <APITokenService
                    key={service.id}
                    serviceType={service.type}
                    onRefetch={handleRefetch}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Settings;
Settings.layout = Layout;
