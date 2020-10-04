import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import ENV from "simple-practice/config/environment";

export default class IndexRoute extends Route {
  @service store;

  async model() {
    let cptCodes;

    try {
      cptCodes = await this.store.query("cpt-code", {
        filter: {
          clinicianId: ENV.clientInfo.clinicianID,
        },
      });
    } catch (errors) {
      console.log(errors);
      return;
    }

    return cptCodes;
  }
}
