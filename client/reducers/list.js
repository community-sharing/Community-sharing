var defaultItems = [
  {item_id: 12003, category: 'Tools',item_name: 'lawnmower',description: 'Makita petrol 140cc',available: true,image_url: '',owner_id: 7005, location:'Karori'},
  {item_id: 12004, category: 'Sport and Recreation',item_name: 'Kyak',description: 'Viking Profish',available: true,image_url: '',owner_id: 7006, location:'Kapiti'},
  {item_id: 12005, category: 'Other',item_name: 'Hovercraft',description: 'home made, single saet',available: false,image_url: '',owner_id: 7007, location:'Wellington'},
  {item_id: 12006, category: 'Musical Instruments',item_name: 'Guitar',description: 'childs size claassical style',available: true,image_url: '',owner_id: 7008, location:'Wellington'}
]

const listings = (state = defaultItems, action) => {
  switch (action.type) {
    case 'GET_LISTINGS':
      return action
      

    default:
      return state
  }
}

export default openTab
