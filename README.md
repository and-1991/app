# app
test_app_react/redux

const routes = [
  {
    path: '/some-path(1)',
    component: some-component(1)
  },
  {
    path: '/some-path(2)',
    component: some-component(2),
    routes: [
      {
        path: '/some-path(2)/some-path(n)',
        component: some-component(3)
      },
      {
        path: '/some-path(2)/some-path(n)',
        component: some-component(4)
      }
    ]
  }
] - настройкa Route-ов
