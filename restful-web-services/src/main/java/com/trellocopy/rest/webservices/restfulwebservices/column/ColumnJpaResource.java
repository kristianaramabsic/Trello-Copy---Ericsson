package com.trellocopy.rest.webservices.restfulwebservices.column;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import com.trellocopy.rest.webservices.restfulwebservices.board.BoardJpaRepository;
import com.trellocopy.rest.webservices.restfulwebservices.board.Board;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ColumnJpaResource {

    @Autowired
    private ColumnJpaRepository columnJpaRepository;

    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @GetMapping("/jpa/boards/{boardId}/columns")
    public List<Column> getAllColumnsForBoard(@PathVariable long boardId) {
        // Check if the board exists before retrieving columns
        Board board = boardJpaRepository.findById(boardId).orElse(null);
        if (board != null) {
            return columnJpaRepository.findByBoardId(boardId);
        } else {
            // Handle board not found error
            return null;
        }
    }

    @PostMapping("/jpa/boards/{boardId}/columns")
    public ResponseEntity<Void> createColumn(@PathVariable long boardId, @RequestBody Column column) {
        // Check if the board exists before creating a column
        Board board = boardJpaRepository.findById(boardId).orElse(null);
        if (board != null) {
            column.setBoard(board);
            Column createdColumn = columnJpaRepository.save(column);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}").buildAndExpand(createdColumn.getId()).toUri();
            return ResponseEntity.created(uri).build();
        } else {
            // Handle board not found error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}

