/**
 * Types and contracts shared by the web app and the API.
 * If a shape changes here, TypeScript flags every place that needs updating
 * on both sides.
 */

export interface HealthResponse {
  status: "ok";
}
