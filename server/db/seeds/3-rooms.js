exports.seed = function (knex) {
  // Inserts seed entries
  return knex('rooms').insert([
    { id: 1, house_id: 1, description: '1 single bed', available: true },
    { id: 2, house_id: 1, description: '2 double beds, 1 bunk bed', available: true },
    { id: 3, house_id: 1, description: '1 queen bed, 2 single beds', available: true },
    { id: 4, house_id: 2, description: '2 single beds', available: true },
    { id: 5, house_id: 2, description: '6 bunk beds', available: true },
    { id: 6, house_id: 3, description: '1 queen bed', available: true },
    { id: 7, house_id: 4, description: '1 single bed', available: true },
    { id: 8, house_id: 5, description: '2 double beds, 1 bunk bed', available: true },
    { id: 9, house_id: 5, description: '1 queen bed, 2 single beds', available: true },
    { id: 10, house_id: 6, description: '1 single bed', available: true },
    { id: 12, house_id: 7, description: '2 double beds, 1 bunk bed', available: true },
    { id: 13, house_id: 7, description: '1 queen bed, 2 single beds', available: true },
    { id: 14, house_id: 7, description: '2 single beds', available: true },
    { id: 15, house_id: 7, description: '6 bunk beds', available: true },
    { id: 16, house_id: 8, description: '1 queen bed', available: true },
    { id: 17, house_id: 8, description: '1 single bed', available: true },
    { id: 18, house_id: 9, description: '2 double beds, 1 bunk bed', available: true },
    { id: 19, house_id: 9, description: '1 queen bed, 2 single beds', available: true },
    { id: 20, house_id: 9, description: '1 single bed', available: true },
    { id: 21, house_id: 9, description: '1 single bed', available: true },
    { id: 22, house_id: 10, description: '2 double beds, 1 bunk bed', available: true },
    { id: 23, house_id: 10, description: '1 queen bed, 2 single beds', available: true },
    { id: 24, house_id: 11, description: '2 single beds', available: true },
    { id: 25, house_id: 11, description: '6 bunk beds', available: true },
    { id: 26, house_id: 11, description: '1 queen bed', available: true },
    { id: 27, house_id: 11, description: '1 single bed', available: true },
    { id: 28, house_id: 12, description: '2 double beds, 1 bunk bed', available: true },
    { id: 29, house_id: 12, description: '1 queen bed, 2 single beds', available: true },
    { id: 30, house_id: 13, description: '1 single bed', available: true },
    { id: 31, house_id: 13, description: '1 single bed', available: true },
    { id: 32, house_id: 13, description: '2 double beds, 1 bunk bed', available: true },
    { id: 33, house_id: 14, description: '1 queen bed, 2 single beds', available: true },
    { id: 34, house_id: 14, description: '2 single beds', available: true },
    { id: 35, house_id: 15, description: '6 bunk beds', available: true },
    { id: 36, house_id: 16, description: '1 queen bed', available: true },
    { id: 37, house_id: 16, description: '1 single bed', available: true },
    { id: 38, house_id: 16, description: '2 double beds, 1 bunk bed', available: true },
    { id: 39, house_id: 16, description: '1 queen bed, 2 single beds', available: true },
    { id: 40, house_id: 17, description: '2 double beds, 1 bunk bed', available: true },
    { id: 41, house_id: 17, description: '1 single bed', available: true },
    { id: 42, house_id: 17, description: '2 double beds, 1 bunk bed', available: true },
    { id: 43, house_id: 17, description: '1 queen bed, 2 single beds', available: true },
    { id: 44, house_id: 18, description: '2 single beds', available: true },
    { id: 45, house_id: 18, description: '6 bunk beds', available: true },
    { id: 46, house_id: 19, description: '1 queen bed', available: true },
    { id: 47, house_id: 19, description: '1 single bed', available: true },
    { id: 48, house_id: 19, description: '2 double beds, 1 bunk bed', available: true },
    { id: 49, house_id: 20, description: '1 queen bed, 2 single beds', available: true },
    { id: 50, house_id: 20, description: '6 bunk beds', available: true },
    { id: 51, house_id: 21, description: '1 single bed', available: true },
    { id: 52, house_id: 22, description: '2 double beds, 1 bunk bed', available: true },
    { id: 53, house_id: 22, description: '1 queen bed, 2 single beds', available: true },
    { id: 54, house_id: 22, description: '2 single beds', available: true },
    { id: 55, house_id: 22, description: '6 bunk beds', available: true },
    { id: 56, house_id: 23, description: '1 queen bed', available: true },
    { id: 57, house_id: 23, description: '1 single bed', available: true },
    { id: 58, house_id: 24, description: '2 double beds, 1 bunk bed', available: true },
    { id: 59, house_id: 24, description: '1 queen bed, 2 single beds', available: true },
    { id: 60, house_id: 24, description: '1 single bed', available: true },
    { id: 61, house_id: 24, description: '1 single bed', available: true },
    { id: 62, house_id: 25, description: '2 double beds, 1 bunk bed', available: true },
    { id: 63, house_id: 25, description: '1 queen bed, 2 single beds', available: true },
    { id: 64, house_id: 26, description: '2 single beds', available: true },
    { id: 65, house_id: 26, description: '6 bunk beds', available: true },
    { id: 66, house_id: 26, description: '1 queen bed', available: true },
    { id: 67, house_id: 27, description: '1 single bed', available: true },
    { id: 68, house_id: 27, description: '2 double beds, 1 bunk bed', available: true },
    { id: 69, house_id: 27, description: '1 queen bed, 2 single beds', available: true },
    { id: 70, house_id: 27, description: '1 single bed', available: true },
    { id: 71, house_id: 28, description: '1 single bed', available: true },
    { id: 72, house_id: 28, description: '2 double beds, 1 bunk bed', available: true },
    { id: 73, house_id: 28, description: '1 queen bed, 2 single beds', available: true },
    { id: 74, house_id: 29, description: '2 single beds', available: true },
    { id: 75, house_id: 29, description: '6 bunk beds', available: true },
    { id: 76, house_id: 30, description: '1 queen bed', available: true },
    { id: 77, house_id: 30, description: '1 single bed', available: true },
    { id: 78, house_id: 30, description: '2 double beds, 1 bunk bed', available: true },
    { id: 79, house_id: 30, description: '1 queen bed, 2 single beds', available: true },
    { id: 80, house_id: 31, description: '2 double beds, 1 bunk bed', available: true },
    { id: 81, house_id: 31, description: '1 single bed', available: true },
    { id: 82, house_id: 31, description: '2 double beds, 1 bunk bed', available: true },
    { id: 83, house_id: 31, description: '1 queen bed, 2 single beds', available: true },
    { id: 84, house_id: 32, description: '2 single beds', available: true },
    { id: 85, house_id: 32, description: '6 bunk beds', available: true },
    { id: 86, house_id: 33, description: '1 queen bed', available: true },
    { id: 87, house_id: 33, description: '1 single bed', available: true },
    { id: 88, house_id: 33, description: '2 double beds, 1 bunk bed', available: true },
    { id: 89, house_id: 34, description: '1 queen bed, 2 single beds', available: true },
    { id: 90, house_id: 34, description: '6 bunk beds', available: true },
    { id: 91, house_id: 35, description: '1 single bed', available: true },
    { id: 92, house_id: 35, description: '2 double beds, 1 bunk bed', available: true },
    { id: 93, house_id: 35, description: '1 queen bed, 2 single beds', available: true },
    { id: 94, house_id: 35, description: '2 single beds', available: true },
    { id: 95, house_id: 36, description: '6 bunk beds', available: true },
    { id: 96, house_id: 36, description: '1 queen bed', available: true },
    { id: 97, house_id: 37, description: '1 single bed', available: true },
    { id: 98, house_id: 38, description: '2 double beds, 1 bunk bed', available: true },
    { id: 99, house_id: 38, description: '1 queen bed, 2 single beds', available: true },
    { id: 100, house_id: 38, description: '1 single bed', available: true },
    { id: 101, house_id: 39, description: '1 single bed', available: true },
    { id: 102, house_id: 39, description: '2 double beds, 1 bunk bed', available: true },
    { id: 103, house_id: 40, description: '1 queen bed, 2 single beds', available: true },
    { id: 104, house_id: 40, description: '2 single beds', available: true },
    { id: 105, house_id: 41, description: '6 bunk beds', available: true },
    { id: 106, house_id: 41, description: '1 queen bed', available: true },
    { id: 107, house_id: 41, description: '1 single bed', available: true },
    { id: 108, house_id: 42, description: '2 double beds, 1 bunk bed', available: true },
    { id: 109, house_id: 43, description: '1 queen bed, 2 single beds', available: true },
    { id: 110, house_id: 44, description: '1 single bed', available: true },
    { id: 111, house_id: 44, description: '1 single bed', available: true },
    { id: 112, house_id: 44, description: '2 double beds, 1 bunk bed', available: true },
    { id: 113, house_id: 44, description: '1 queen bed, 2 single beds', available: true },
    { id: 114, house_id: 45, description: '2 single beds', available: true },
    { id: 115, house_id: 45, description: '6 bunk beds', available: true },
    { id: 116, house_id: 46, description: '1 queen bed', available: true },
    { id: 117, house_id: 46, description: '1 single bed', available: true },
    { id: 118, house_id: 47, description: '2 double beds, 1 bunk bed', available: true },
    { id: 119, house_id: 47, description: '1 queen bed, 2 single beds', available: true },
    { id: 120, house_id: 47, description: '1 single bed', available: true },
    { id: 121, house_id: 47, description: '1 single bed', available: true },
    { id: 122, house_id: 48, description: '2 double beds, 1 bunk bed', available: true },
    { id: 123, house_id: 48, description: '1 queen bed, 2 single beds', available: true },
    { id: 124, house_id: 48, description: '2 single beds', available: true },
    { id: 125, house_id: 49, description: '6 bunk beds', available: true },
    { id: 126, house_id: 49, description: '1 queen bed', available: true },
    { id: 127, house_id: 50, description: '1 single bed', available: true },
    { id: 128, house_id: 50, description: '2 double beds, 1 bunk bed', available: true },
    { id: 129, house_id: 50, description: '1 queen bed, 2 single beds', available: true }
  ])
}
