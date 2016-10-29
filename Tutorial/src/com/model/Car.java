package com.model;

import org.springframework.stereotype.Component;

@Component
public class Car {
	private int id;
	private String name;
	private String brand;
	private int price;
	private boolean forSale;
	
	private CarTypes carType;
	
	public Car() {
	}
	
	
	
	
	public Car(int id, String name, String brand, int price, boolean forSale, CarTypes carType) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.price = price;
		this.forSale = forSale;
		this.carType = carType;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public boolean isForSale() {
		return forSale;
	}

	public void setForSale(boolean forSale) {
		this.forSale = forSale;
	}

	public CarTypes getCarType() {
		return carType;
	}

	public void setCarType(CarTypes carType) {
		this.carType = carType;
	}
	
}
