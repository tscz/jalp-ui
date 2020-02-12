/**
 * Interface for Environment Definitions.
 */
export interface Environment {
  /** If true, this environment is configured for production. */
  production: boolean;

  /** Base url for REST API. */
  urlAddress: string;
}
