package com.trellocopy.rest.webservices.restfulwebservices.board;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.trellocopy.rest.webservices.restfulwebservices.board.Board;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BoardJpaResource {

	@Autowired
	private BoardJpaRepository boardJpaRepository;

	
	@GetMapping("/jpa/boards")
	public List<Board> getAllBoards(){
		return boardJpaRepository.findAll();
	}

	@GetMapping("/jpa/boards/{id}")
	public Board getBoard(@PathVariable long id){
		return boardJpaRepository.findById(id).get();
	}
	
	@PutMapping("/jpa/boards/{id}")
	public ResponseEntity<Board> updateBoard(
			@PathVariable long id, @RequestBody Board board){
		
		Board boardUpdated = boardJpaRepository.save(board);
		
		return new ResponseEntity<Board>(board, HttpStatus.OK);
	}

	@PostMapping("/jpa/boards")
	public ResponseEntity<Void> createBoard(@RequestBody Board board){
		
		Board createdBoard = boardJpaRepository.save(board);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdBoard.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
