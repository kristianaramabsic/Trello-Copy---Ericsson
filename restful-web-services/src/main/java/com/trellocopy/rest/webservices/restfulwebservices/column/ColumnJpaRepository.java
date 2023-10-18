package com.trellocopy.rest.webservices.restfulwebservices.column;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColumnJpaRepository extends JpaRepository<Column, Long>{
    List<Column> findByBoardId(Long boardId);
}
