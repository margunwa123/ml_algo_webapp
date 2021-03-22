// yang mau implemen
// kalo ga ngerti typescript ganti ke javascript aja kode ekuivalen javascript ada di bagian bawah

class GradientAscent implements ML_Algo {
  solve() {}
}

class GradientDescent implements ML_Algo {
  solve() {}
}

class Gradient {
  static Ascent = new GradientAscent();
  static Descent = new GradientDescent();
}

export default Gradient;
/**
 * 
 * Kode ekuivalen javascript
class GradientAscent {
  solve() {}
}

class GradientDescent {
  solve() {}
}

class Gradient {
  static Ascent = new GradientAscent();
  static Descent = new GradientDescent();
}

export default Gradient;
 */
