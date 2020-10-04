import Route from "@ember/routing/route";
import ENV from "simple-practice/config/environment";
import { inject as service } from "@ember/service";

export default class LocationRoute extends Route {
  @service store;

  async model(params) {
    let cptCodes;

    try {
      cptCodes = await this.store.query("offices", {
        filter: {
          clinicianId: ENV.clientInfo.clinicianID,
          cptCodeId: params.id,
        },
      });
    } catch (errors) {
      console.log(errors);
      return;
    }

    return cptCodes;
  }
}
