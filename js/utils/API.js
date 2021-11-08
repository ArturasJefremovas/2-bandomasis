const serverURL = 'http://localhost:3000';

class API {
  static getToys = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/toys`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteToys = (id, success, failure) => {
    fetch(`${serverURL}/toys/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

API.getToys(
  (duomenys) => console.log('gavau duomenis', duomenys), // success
  (klaida) => console.error('klaida!!!!', klaida) // failure
)


API.deleteToys(
  '1', // id
  (duomenys) => console.log('gavau duomenis', duomenys), // success
  (klaida) => console.error('klaida!!!!', klaida) // failure
)