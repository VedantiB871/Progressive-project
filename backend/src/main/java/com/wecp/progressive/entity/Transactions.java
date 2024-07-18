package com.wecp.progressive.entity;
//import java.util.Date;
 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
 
@Entity
public class Transactions {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer transactionId;
 
 
    private Integer accountId;
    private Double amount;
    private String transactionDate;
    private String transactionType;
 
 
    @ManyToOne
    private Accounts accounts;
 
 
    public Transactions() {
    }
 
 
    public Transactions(Integer transactionId, Integer accountId, Double amount, String transactionDate,
            String transactionType, Accounts accounts) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.transactionType = transactionType;
        this.accounts = accounts;
    }
 
 
    public Integer getTransactionId() {
        return transactionId;
    }
 
 
    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }
 
 
    public Integer getAccountId() {
        return accountId;
    }
 
 
    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }
 
 
    public Double getAmount() {
        return amount;
    }
 
 
    public void setAmount(Double amount) {
        this.amount = amount;
    }
 
 
    public String getTransactionDate() {
        return transactionDate;
    }
 
 
    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }
 
 
    public String getTransactionType() {
        return transactionType;
    }
 
 
    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }
 
 
    public Accounts getAccounts() {
        return accounts;
    }
 
 
    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }

 
 
}