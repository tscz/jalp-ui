/**
 * Entity interface for an Indexcard.
 */
export interface Indexcard {
  /** Id of a user. */
  userId: number;

  /** Id of an indexcard. */
  id: number;

  /** Title of an indexcard. */
  title: string;

  /** Flag indicating, if it has been completed. */
  completed: boolean;
}
