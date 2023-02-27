package com.demo.observability.middleware.repository;

import com.demo.observability.middleware.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}