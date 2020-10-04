import Model, { attr } from "@ember-data/model";

export default class OfficeModel extends Model {
  @attr("string") name;
  @attr("string") phone;
  @attr("string") street;
  @attr("string") city;
  @attr("string") state;
  @attr("string") zip;
}
