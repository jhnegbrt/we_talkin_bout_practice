// unsigned integer cannot be negative
// floats, ints, boo, char, Tuples, Arrays
// vectors are growable arrays, not primitives

pub fn run(){
  let x = 1;
  let y = 2.5;

  // Add an explicit type
  let y: i64 = 3424324234234;

  println!("MAx i32: {}", std::i32::MAX);
  println!("MAx i64: {}", std::i64::MAX);
}