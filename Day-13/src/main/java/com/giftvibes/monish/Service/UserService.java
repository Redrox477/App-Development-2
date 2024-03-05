package com.giftvibes.monish.Service;

import java.util.List;

import com.giftvibes.monish.dto.request.RegisterRequest;
import com.giftvibes.monish.dto.response.RegisterResponse;
import com.giftvibes.monish.dto.response.UserFetchResponse;

public interface UserService {
    RegisterResponse register(RegisterRequest request);

    List<UserFetchResponse> getAll();

    UserFetchResponse getById(String id) throws Exception ;
}