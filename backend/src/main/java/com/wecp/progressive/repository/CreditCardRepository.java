package com.wecp.progressive.repository;

//import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entity.CreditCard;

@Repository
public interface CreditCardRepository extends JpaRepository<CreditCard, Long>{
}