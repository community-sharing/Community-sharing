
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      // Inserts seed entries
      return knex('loans').insert([
        {loan_id: 2005, lenders_id: 7006,  borrowers_id: 7005, item_id: 12004, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2006, lenders_id: 7008,  borrowers_id: 7006, item_id: 12006 , pickup: '2017-04-20 11:00:00', dropoff: '2017-05-20 10:00:00'}
      ]);
    });
};
