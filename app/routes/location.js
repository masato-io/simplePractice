import Route from "@ember/routing/route";
import ENV from "simple-practice/config/environment";
import { inject as service } from "@ember/service";

export default class LocationRoute extends Route {
  @service store;

  async model(params) {
    let offices;

    try {
      offices = await this.store.query("office", {
        filter: {
          clinicianId: ENV.clientInfo.clinicianID,
          cptCodeId: params.id,
        },
      });
    } catch (errors) {
      console.log(errors);
      return;
    }

    return offices;
  }
}
