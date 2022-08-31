String.prototype.rtrim = function () {
  return this.replace(/((\s*\S+)*)\s*/, "$1");
};

const createCallBack = (title, location, contract) => {
  return (job) => {
    let titlePass;
    let locationPass;
    let contractPass;
    title = title.rtrim();
    location = location.rtrim();
    contract = contract.rtrim();
    if (title === "*") {
      titlePass = true;
    } else {
      if (
        job.position.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      ) {
        titlePass = true;
      } else if (
        job.company.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      ) {
        titlePass = true;
      }
    }

    if (location === "*") {
      locationPass = true;
    } else {
      locationPass = job.location
        .toLocaleLowerCase()
        .includes(location.toLocaleLowerCase());
    }

    if (contract === "*") {
      contractPass = true;
    } else {
      contract = "Full Time";
      contractPass = job.contract
        .toLocaleLowerCase()
        .includes(contract.toLocaleLowerCase());
    }
    return titlePass && locationPass && contractPass;
  };
};

export default createCallBack;
