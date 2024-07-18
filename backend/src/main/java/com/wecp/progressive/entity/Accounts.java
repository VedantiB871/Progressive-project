package com.wecp.progressive.entity;
 
import java.util.List;
 
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
 
 
 
@Entity
@Table(name = "accounts")
public class Accounts {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountId;
   
    @Column(name = "customerId")
    private Integer customerId;
    private Double balance;
 
    @OneToMany(mappedBy = "accounts",cascade = CascadeType.ALL)
    private List<Transactions> transactions;
 
    @ManyToOne
    private Customers customers;
 
    public Accounts() {
    }
 
    public Accounts(Integer accountId, Integer customerId, Double balance, List<Transactions> transactions,
            Customers customers) {
        this.accountId = accountId;
        this.customerId = customerId;
        this.balance = balance;
        this.transactions = transactions;
        this.customers = customers;
    }
 
    public Integer getAccountId() {
        return accountId;
    }
 
    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }
 
    public Integer getCustomerId() {
        return customerId;
    }
 
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }
 
    public Double getBalance() {
        return balance;
    }
 
    public void setBalance(Double balance) {
        this.balance = balance;
    }
 
    public List<Transactions> getTransactions() {
        return transactions;
    }
 
    public void setTransactions(List<Transactions> transactions) {
        this.transactions = transactions;
    }
 
    public Customers getCustomers() {
        return customers;
    }
 
    public void setCustomers(Customers customers) {
        this.customers = customers;
    }
 
   
   
 
   
 
 
}