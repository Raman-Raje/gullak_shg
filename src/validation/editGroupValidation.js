import * as Yup from "yup";

import basicDetailsSchema from "./basicValidation";
import loanSchema from "./loanValidation";
import { updateContributionsSchema } from "./contributionValidation";


// Combine all the schemas
const groupSettingSchema = Yup.object().shape({
    ...basicDetailsSchema.fields,
    ...loanSchema.fields,
    ...updateContributionsSchema.fields,
});

export default groupSettingSchema;