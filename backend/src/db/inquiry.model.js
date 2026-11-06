export const inquiryModel = {
  tableName: "project_inquiries",
  fields: {
    name: {
      type: "text",
      required: true,
      maxLength: 100,
    },
    email: {
      type: "text",
      required: true,
      maxLength: 255,
    },
    project_type: {
      type: "text",
      required: true,
      maxLength: 100,
    },
    budget_range: {
      type: "text",
      required: false,
      nullable: true,
    },
    timeline: {
      type: "text",
      required: false,
      nullable: true,
    },
    required_features: {
      type: "text",
      required: false,
      nullable: true,
    },
    description: {
      type: "text",
      required: true,
      maxLength: 4000,
    },
  },
};

export const inquiryInsertFields = [
  "name",
  "email",
  "project_type",
  "budget_range",
  "timeline",
  "required_features",
  "description",
];
