
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_id: 12003, item_name: 'Lawnmower', category: 'Tools', description: 'Makita petrol 140cc', location:'Karori', image_url: '', owner_id: 7005, available: true},
        {item_id: 12004, item_name: 'Kayak', category: 'Sport and Recreation', description: 'Viking Profish', location:'Kapiti', image_url: '',owner_id: 7006, available: true, },
        {item_id: 12005, item_name: 'Hovercraft', category: 'Other', description: 'Home made, single seat', location:'Wellington', image_url: '',owner_id: 7007, available: false,},
        {item_id: 12006, item_name: 'Guitar', category: 'Musical Instruments', description: 'Childs size classical style', location:'Wellington', image_url: '',owner_id: 7008, available: true}
      ]);
    });
};
