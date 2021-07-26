//
export class BankAccount {
  constructor() {
    this.status = 'closed';
    this.funds = 0;
  }

  open() {
    if(this.status === 'open') {
      throw new ValueError();
    } else {
      this.status = 'open';
    }
  }

  close() {
    if (this.status === 'open') {
      this.status = 'closed';
      this.funds = 0;
    } else {
      throw new ValueError();
    }
  }

  deposit(depositAmount) {
    if (this.status === 'open' && Math.sign(depositAmount) === 1) {
    this.funds = this.funds + depositAmount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount <= this.funds && this.status === 'open' && Math.sign(withdrawAmount) === 1) {
      this.funds = this.funds - withdrawAmount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.status === 'open') {
    return this.funds;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
