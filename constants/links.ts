export const Credentials = {
  email: "pikoy25780@bitflirt.com",
  password: "zafarzhon77",
};

export const URLs = {
  login: "/login",
  dashboard: "/dashboard",
  units: "/units",
  users: "/users",
  fuelHistory: "/fuel-history",
  createFuelHistory: "/fuel-history/create",
  assigments: "/assignments",
  meterHistory: "/meter-history",
  papers: "/papers",
  createUnit: "/create-unit",
  updateUnit: "/units/update/",
  subPage: "/units?page=1&filter=",
  userEditPage: "/users/update/",
  inspectionForms: "/inspections/forms",
  issueCreatePage: "/issues/add",
  issues: "/issues",
  serviceHistory: "/service-history",
  serviceTaskCreate: "/services/service-task/create",
  serviceTask: "/services/service-task/",
  workOrders: "/work-orders",
  workOrdersCreate: "/work-orders/add",
  serviceRemindersPage: "/reminders/services",
  vehicleRemindersPage: "/reminders/vehicles",
  contactRemindersPage: "/reminders/contacts",
  addServiceReminders: "/reminders/services/add",
  addVehicleReminders: "/reminders/vehicles/create",
  addContactReminders: "/reminders/contacts/add",
  addEquipments: "/equipments/create",
  equipmentsPage: "/equipments",
  addVendors: "/vendor/add",
  vendorsPage: "/vendor",
  addParts: "/parts/create",
  partsPage: "/parts",

  api: {
    login: "/api/v1/accounts/login/",
    createFuelHistory: "/api/v1/fuel-entries/create/",
    createUnit: "/api/v1/vehicles/create/",
    deleteUnit: "/api/v1/vehicles/*/delete/",
    getUnitDetail: "/api/v1/vehicles/**/",
    editUnit: "/api/v1/vehicles/**/update/",
    unitReq: "/api/v1/vehicles/?offset=0&limit=10",
    completeReq: "/api/v1/dashboard/analytics/complete/",
    unitFilterReq: `/api/v1/vehicles/**`,
    // assignedUnitsReq: "/api/v1/vehicles/?offset=0&limit=10&is_assigned=true",
    unitSubPageReq: "/api/v1/vehicles/?offset=0&limit=10",
    getUnitDetailReq: "/api/v1/vehicles/**/",
    getInfoLatestOdometerReq: "/api/v1/vehicles/**/latest-odometer/",
    getLinkedUnitDetailReq: "/api/v1/vehicles/**/linked/",
    createCommentReq: "/api/v1/vehicles/comments/create/",
    deleteCommentReq: "/api/v1/vehicles/**/comments/delete/",
    linkVehicleReq: `/api/v1/vehicles/**/link/`,
    unLinkVehicleReq: `/api/v1/vehicles/**/unlink/`,
    contactsReq: "/api/v1/accounts/contacts/?enable_fleetio_access=true",

    createUser: "/api/v1/accounts/contacts/create/",
    deleteUser: "/api/v1/accounts/contacts/**/delete/",
    editUser: "/api/v1/accounts/contacts/**/update/",
    getUser: "/api/v1/accounts/contacts/**/",
    activeContactsRequest:
      "/api/v1/accounts/contacts/?enable_fleetio_access=true&status=active&offset=0&limit=10",
    archivedContactsRequest:
      "/api/v1/accounts/contacts/?enable_fleetio_access=true&status=archived&offset=0&limit=10",
    inactiveContactsRequest:
      "/api/v1/accounts/contacts/?enable_fleetio_access=true&status=inactive&offset=0&limit=10",
    userRoleFilter:
      "/api/v1/accounts/contacts/?enable_fleetio_access=true&role=",
    issuesCreateReq: "/api/v1/issues/create/",
  },
};
