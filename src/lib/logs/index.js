import { Logtail } from "@logtail/node"
const logtail = new Logtail("qcbixK4gHdjN91XCKzmDcUiB");

export function getLogger() {
    return logtail
}