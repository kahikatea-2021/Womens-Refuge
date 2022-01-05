exports.seed = function (knex) {
  // Inserts seed entries
  return knex('rooms').insert([
    { id: 1, house_id: 1, description: '1 single bed', available: false, single_beds: 1, double_beds: 0, queen_beds: 0, king_beds: 0, bunk_beds: 0 },
    { id: 2, house_id: 1, description: '2 double beds, 1 bunk bed', available: false, single_beds: 0, double_beds: 2, queen_beds: 0, king_beds: 0, bunk_beds: 1 },
    { id: 3, house_id: 1, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 4, house_id: 2, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 5, house_id: 2, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 6, house_id: 3, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 7, house_id: 4, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 8, house_id: 5, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 9, house_id: 5, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 10, house_id: 6, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 12, house_id: 7, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 13, house_id: 7, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 14, house_id: 7, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 15, house_id: 7, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 16, house_id: 8, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 17, house_id: 8, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 18, house_id: 9, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 19, house_id: 9, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 20, house_id: 9, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 21, house_id: 9, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 22, house_id: 10, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 23, house_id: 10, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 24, house_id: 11, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 25, house_id: 11, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 26, house_id: 11, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 27, house_id: 11, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 28, house_id: 12, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 29, house_id: 12, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 30, house_id: 13, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 31, house_id: 13, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 32, house_id: 13, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 33, house_id: 14, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 34, house_id: 14, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 35, house_id: 15, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 36, house_id: 16, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 37, house_id: 16, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 38, house_id: 16, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 39, house_id: 16, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 40, house_id: 17, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 41, house_id: 17, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 42, house_id: 17, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 43, house_id: 17, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 44, house_id: 18, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 45, house_id: 18, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 46, house_id: 19, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 47, house_id: 19, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 48, house_id: 19, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 49, house_id: 20, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 50, house_id: 20, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 51, house_id: 21, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 52, house_id: 22, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 53, house_id: 22, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 54, house_id: 22, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 55, house_id: 22, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 56, house_id: 23, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 57, house_id: 23, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 58, house_id: 24, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 59, house_id: 24, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 60, house_id: 24, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 61, house_id: 24, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 62, house_id: 25, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 63, house_id: 25, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 64, house_id: 26, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 65, house_id: 26, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 66, house_id: 26, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 67, house_id: 27, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 68, house_id: 27, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 69, house_id: 27, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 70, house_id: 27, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 71, house_id: 28, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 72, house_id: 28, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 73, house_id: 28, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 74, house_id: 29, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 75, house_id: 29, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 76, house_id: 30, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 77, house_id: 30, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 78, house_id: 30, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 79, house_id: 30, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 80, house_id: 31, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 81, house_id: 31, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 82, house_id: 31, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 83, house_id: 31, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 84, house_id: 32, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 85, house_id: 32, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 86, house_id: 33, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 87, house_id: 33, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 88, house_id: 33, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 89, house_id: 34, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 90, house_id: 34, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 91, house_id: 35, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 92, house_id: 35, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 93, house_id: 35, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 94, house_id: 35, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 95, house_id: 36, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 96, house_id: 36, description: '1 queen bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 97, house_id: 37, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 98, house_id: 38, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 99, house_id: 38, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 100, house_id: 38, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 101, house_id: 39, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 102, house_id: 39, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 103, house_id: 40, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 104, house_id: 40, description: '2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 105, house_id: 41, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 106, house_id: 41, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 107, house_id: 41, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 108, house_id: 42, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 109, house_id: 43, description: '1 queen bed, 2 single beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 110, house_id: 44, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 111, house_id: 44, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 112, house_id: 44, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 113, house_id: 44, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 114, house_id: 45, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 115, house_id: 45, description: '6 bunk beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 116, house_id: 46, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 117, house_id: 46, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 118, house_id: 47, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 119, house_id: 47, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 120, house_id: 47, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 121, house_id: 47, description: '1 single bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 122, house_id: 48, description: '2 double beds, 1 bunk bed', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 123, house_id: 48, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 124, house_id: 48, description: '2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 125, house_id: 49, description: '6 bunk beds', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 126, house_id: 49, description: '1 queen bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 127, house_id: 50, description: '1 single bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 128, house_id: 50, description: '2 double beds, 1 bunk bed', available: false, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 },
    { id: 129, house_id: 50, description: '1 queen bed, 2 single beds', available: true, single_beds: 2, double_beds: 0, queen_beds: 1, king_beds: 0, bunk_beds: 0 }
  ])
}
