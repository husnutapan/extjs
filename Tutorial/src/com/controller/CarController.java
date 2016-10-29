package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model.Car;
import com.model.CarTypes;

@Controller
public class CarController {

	@RequestMapping(value="/", method = RequestMethod.GET)
	public String setViewName() {
		return "index";
	}

	@RequestMapping(value = "/getAllCarList", method = RequestMethod.POST)
	public List<Car> getCars() {
		List<Car> list = new ArrayList<>();
		Car car = new Car(1, "name1", "brand1", 1000, true, CarTypes.COMPACT);
		Car car2 = new Car(2, "name2", "brand2", 2000, true, CarTypes.COMPACT);
		Car car3 = new Car(3, "name3", "brand3", 3000, true, CarTypes.COMPACT);
		Car car4 = new Car(4, "name4", "brand4", 4000, true, CarTypes.COMPACT);
		Car car5 = new Car(5, "name5", "brand5", 5000, true, CarTypes.COMPACT);

		list.add(car);
		list.add(car2);
		list.add(car3);
		list.add(car4);
		list.add(car5);
		return list;

	}

}
