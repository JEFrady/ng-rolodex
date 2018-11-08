exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return Promise.all([
      // knex('users').del(),
      knex('contacts').del()
  
    ]) 
        .then(function () {
        // Inserts seed entries
        return Promise.all([
          // knex('users').insert([
          //   { username: 'Sara4ever', password: 'password', name: 'Sarah', email: 'sarah@email.com', address: '123 Snow Lane, Bigfork, MT, 59901'},
          //   { username: 'AbstractName', password: 'password', name: 'CJ', email: 'charles@email.com', address: '123 Mountain Drive, Seattle, WA, 98101'},
          //   { username: 'BetterFindBen', password: 'password', name: 'Ben', email: 'ben@email.com', address: '123 Basic Street, Honolulu, HI, 96818'}
          // ]),
          knex('contacts').insert([
            { name: 'Abby', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact@user.com', twitter: '@contact1', instagram: '@contact1', github: 'CONtact1', created_by: 1},
            { name: 'Bob', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact2@user.com', twitter: '@contact2', instagram: '@contact2', github: 'CONtact2', created_by: 2},
            { name: 'Carl', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact3@user.com', twitter: '@contact3', instagram: '@contact3', github: 'CONtact3',
            created_by: 3},
            { name: 'Dave', address: '123 Rainbow Lane.', primary_phone: '222-222-2222', alt_phone: null, email: 'contact4@user.com', twitter: '@contact4', instagram: '@contact4', github: 'CONtact4',
            created_by: 1}
          ])
        ])
      });
  };