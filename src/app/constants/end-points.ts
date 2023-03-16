var calls =  {
  workrequest: {
    all: 'work-request',
    update: 'work-request/update',
    delete: 'work-request/delete',
    filter: 'work-request/filter',
    save: 'work-request/store',
    post_edit: 'work-request/edit',
    get_edit: 'work-request/'
  },
  worktype: {
    all: 'work-type',
    update: 'work-type/update',
    delete: 'work-type/delete',
    edit: 'work-request/edit',
    save: 'work-type/store'
  },
  priority: {
    all: 'priority',
    update: 'priority/update',
    delete: 'priority/delete',
    edit: 'priority/edit',
    save: 'priority/store'
  },
  levelofimpact: {
    all: 'level-of-impact',
    update: 'level-of-impact/update',
    delete: 'level-of-impact/delete',
    edit: 'level-of-impact/edit',
    save: 'level-of-impact/store'
  },
  urgency: {
    all: 'urgency',
    update: 'urgency/update',
    delete: 'urgency/delete',
    edit: 'urgency/edit',
    save: 'urgency/store'
  },
  subscription: {
    all: 'subscription',
    update: 'subscription/update',
    delete: 'subscription/delete',
    edit: 'subscription/edit',
    save: 'subscription/store'
  },
  requesttype: {
    all: 'request-type',
    update: 'request-type/update',
    delete: 'request-type/delete',
    save: 'request-type/store'
  },
  status: {
    all: 'status',
    update: 'status/update',
    delete: 'status/delete',
    save: 'status/store'
  },
  risklevel: {
    all: 'risk-level',
    update: 'risk-level/update',
    delete: 'risk-level/delete',
    save: 'risk-level/store'
  },
  benefittype: {
    all: 'benefit-type',
    update: 'benefit-type/update',
    delete: 'benefit-type/delete',
    save: 'benefit-type/store'
  },
  requiretechnicalassistance: {
    all: 'require-technical-assistance',
    update: 'require-technical-assistance/update',
    delete: 'require-technical-assistance/delete',
    save: 'require-technical-assistance/store'
  },
  user: {
    all: 'user',
    update: 'user/update',
    delete: 'user/delete',
    save: 'user/store',
    login: 'user/login'
  },
}

export {calls};
