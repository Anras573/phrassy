class Random {
  static between (min, max) {
    return min + Math.random() * (max - min)
  }
}

export default Random
