//Use Hashmap

HashMap < String, Integer > setupDictionary(String[] book) {
    HashMap < String, Integer > table = new HashMap < String, Integer > ();
    for (String word: book) {
      word = word.toLowerCase();
      if (word.trim() != "") {
        if (!table.containsKey(word) {
            table.put(word, 0);
          }
          table.put(word, table.get(word) + l);
        }
      }
      return table;
    }

    int getFrequency(HashMap < String, Integer > table, String word) {
        if (table == null || word == null) return -l;
        word = word.toLowerCase()
        if (table.containsKey(word) {
            return table.get(word);
          }
          return 0;
        }
