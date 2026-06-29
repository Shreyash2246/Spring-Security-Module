package com.demo.controller;

import java.util.Optional;


import org.springframework.web.bind.annotation.*;

import com.demo.dto.AuthResponse;
import com.demo.dto.LoginRequest;
import com.demo.dto.RegisterRequest;
import com.demo.entity.User;
import com.demo.repository.UserRepository;
import com.demo.security.JwtUtil;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder;

    public AuthController(
            UserRepository repo,
            BCryptPasswordEncoder encoder) {

        this.repo = repo;
        this.encoder = encoder;
    }

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest req) {

        User user = new User();

        user.setUsername(req.getUsername());

        user.setPassword(
                encoder.encode(
                        req.getPassword()));

        repo.save(user);

        return "User Registered";
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest req) {

        Optional<User> user =
                repo.findByUsername(
                        req.getUsername());

        if(user.isPresent()
                && encoder.matches(
                        req.getPassword(),
                        user.get().getPassword())) {

            String token =
                    JwtUtil.generateToken(
                            req.getUsername());

            return new AuthResponse(token);
        }

        throw new RuntimeException(
                "Invalid Credentials");
    }

    @GetMapping("/logout")
    public String logout() {

        return "Remove token from client side";
    }

    @GetMapping("/welcome")
    public String welcome() {

        return "JWT Protected API";
    }
}
