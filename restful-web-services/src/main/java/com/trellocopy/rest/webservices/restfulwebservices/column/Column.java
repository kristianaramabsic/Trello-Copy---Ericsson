package com.trellocopy.rest.webservices.restfulwebservices.column;

import com.trellocopy.rest.webservices.restfulwebservices.board.Board;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Column {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    
    @ManyToOne
    private Board board;

    protected Column() {
		
	}
	
	public Column(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

    public Long getId() {
        return id;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for board
    public Board getBoard() {
        return board;
    }

    // Setter for board
    public void setBoard(Board board) {
        this.board = board;
    }    
}
