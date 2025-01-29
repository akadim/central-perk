package com.invenboost.centralperk.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "reward_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RewardDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "reward_id", nullable=false)
    private Reward reward;
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable=false)
    private Customer customer;
    private Date createdAt;
}
