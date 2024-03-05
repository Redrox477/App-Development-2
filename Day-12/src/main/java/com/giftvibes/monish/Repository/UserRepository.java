package com.giftvibes.monish.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giftvibes.monish.Models.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
